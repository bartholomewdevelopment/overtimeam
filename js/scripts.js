function showAndHide(imgNum) {
        for (let i = 0; i < 5; i++) {
            document.getElementById(i).style = "display: none;";
            if (imgNum == i) {
                document.getElementById(imgNum).style = "display: inline-block;";
            }
        }
}
