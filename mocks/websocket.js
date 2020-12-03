export const fakeWebsocket = () => {
  const colorArr = [
    "black",
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "silver",
  ];
  const classArr = ["car", "truck", "bus", "motorcycle"];
  const lettersArr = "АВЕКМНОРСТУХ";
  const trafficItem = {};
  const date = new Date();
  trafficItem.timestamp = 1604188800 + date.getSeconds() * 540;
  trafficItem.color = colorArr[Math.floor(Math.random() * 7)];
  trafficItem.class = classArr[Math.floor(Math.random() * 4)];
  trafficItem.plate = `${lettersArr.charAt(
    Math.floor(Math.random() * lettersArr.length)
  )}${Math.floor(Math.random() * 9)}${Math.floor(
    Math.random() * 9
  )}${Math.floor(Math.random() * 9)}${lettersArr.charAt(
    Math.floor(Math.random() * lettersArr.length)
  )}${lettersArr.charAt(
    Math.floor(Math.random() * lettersArr.length)
  )}${Math.floor(10 + Math.random() * (999 + 1 - 10))}`;
  trafficItem.speed = Math.floor(39 + Math.random() * (100 + 1 - 39));
  return trafficItem;
};
