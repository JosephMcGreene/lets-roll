const d2Btn = new Die(2, "#d2", "#numOfD2", "#d2Modifier", "#resultsD2");
const d4Btn = new Die(4, "#d4", "#numOfD4", "#d4Modifier", "#resultsD4");
const d6Btn = new Die(6, "#d6", "#numOfD6", "#d6Modifier", "#resultsD6");
const d8Btn = new Die(8, "#d8", "#numOfD8", "#d8Modifier", "#resultsD8");
const d10Btn = new Die(10, "#d10", "#numOfD10", "#d10Modifier", "#resultsD10");
const d12Btn = new Die(12, "#d12", "#numOfD12", "#d12Modifier", "#resultsD12");
// 
const d20Btn = new D20(20, "#d20", "#numOfD20", "#d20Modifier", "#resultsD20");
// 
const d100Btn = new Die(100, "#d100", "#numOfD100", "#d100Modifier", "#resultsD100");

d2Btn.listenForRoll();
d4Btn.listenForRoll();
d6Btn.listenForRoll();
d8Btn.listenForRoll();
d10Btn.listenForRoll();
d12Btn.listenForRoll();
d20Btn.listenForRoll();
d100Btn.listenForRoll();