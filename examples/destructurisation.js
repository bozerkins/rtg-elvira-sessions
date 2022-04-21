function changeStyles(newStyles) {
    const { 
        wordText,
        color, 
        fontSize = 45, 
        padding = 20, 
        margin = 10, 
        wordSpacing = 10,
    } = newStyles;

    let greeting = document.getElementById('greeting');
    greeting.textContent = wordText;
    greeting.style.fontSize = fontSize + 'px';
    greeting.style.color = color;
    greeting.style.padding = padding + 'px';
    greeting.style.margin = margin + 'px';
    greeting.style.wordSpacing = wordSpacing + 'px';
}

// default styles
// changeStyles('Hello, my dear friend', 67, 'gray', 20, 10, 10);
changeStyles({
    wordText: 'Hello, my dear friend',
    color: 'gray',
    fontSize: 67,
    padding: 25,
});

// on click button 1
document.getElementById('version1').onclick = function() {
    changeStyles({
        wordText: 'Version 1',
        color: 'green',
        fontSize: 55,
    });
};

// on click button 2
document.getElementById('version2').onclick = function () {
    changeStyles({
        wordText: 'Version 2',
        color: 'pink',
        fontSize: 50,
    });
};