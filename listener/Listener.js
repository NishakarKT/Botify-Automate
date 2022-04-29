/* **************** Dependencies ****************** */
const SerialPort = require("serialport");
const firebase = require("./Firebase");
// you have install the required libraries
// how to install ????
// follow ===> https://docs.npmjs.com/cli/v7/commands/npm-install

/* ******* Data To Be Fetched From Arduino ******** */
let secretKey = "myArduino"; // arduino key
let tankActiveStatus = null;
let tankWaterLevel = null;

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: "\r\n"
});

/* ************* Arduino Port Set-Up *************** */
const port_address = "COM3"; // your port address
const port = new SerialPort(port_address, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
port.pipe(parser);

/* ************* Listening To Arduino *************** */
parser.on("data", async data => {
    // DATA FORMAT : "secretKey tankActiveStatus tankWaterLevel"
    [secretKey, tankActiveStatus, tankWaterLevel] = data.split(" ");
    await firebase.database().ref("tanks/" + secretKey).set({
        activeStatus: Number(tankActiveStatus),
        waterLevel: Number(tankWaterLevel)
    });
});

/* ************** Arduino Data Handler *************** */
const getdata = async () => {
    await firebase.database().ref("tanks/" + "myArduino").on("value", async snapshot => {
        console.log(snapshot.val());
        port.write(snapshot.val().activeStatus);
    });
}
getdata();

// run the listener :)
// by NK