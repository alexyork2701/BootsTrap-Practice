function PlayGame() {
			var clientConfirm = confirm("Do you want to play a game?");
			if(clientConfirm==true) {
				var russianConfirm = confirm("Вы не против, если я буду на русском?");
				if (russianConfirm==true){
					var firstQuestion = prompt("В каком году началась Вторая Мировая Война?","");
					if (firstQuestion==1939) {
						alert("NICE");
						var secondQuestion=prompt("Скажите корень 225","");
						if (secondQuestion == 15) {
							alert("А ты харош!!");
						}
						else {
							alert("Неверно,Ты проиграл")
						}
					} else {
						alert("Неверно,Ты проиграл");
					}
				}else {
					alert("Ну ладно, прощай(");
				}
			}else {
				alert("Okaay:(");
			}
		}
function BgColor(){
	
}