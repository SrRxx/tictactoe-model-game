l(function(){
    let models_cells = document.querySelectorAll(".cell"),table = q('#table');
    var value_position; //Value position cell click 
    var positions_game = [1,2,3,4,5,6,7,8,9]; //Positions all boxes

    var random = (v) => {return Math.floor(Math.random() * v);}

    var wait_player = true, index_b; 

    //Functions

    function removeItemFromArr( arr, item ) {return arr.filter( function( e ) {return e !== item;} );};

    //Changes styles .cells

    for (let i = 0; i < models_cells.length; i++) {
        models_cells[i].style.width = 400/3 + "px";
        models_cells[i].style.height = 396/3 + "px";

        //Capturar click en cualquier casilla

        models_cells[i].addEventListener("click", function() {
            value_position = this.getAttribute("data-position");
            value_position = parseInt(value_position);

            index_b = positions_game.indexOf(value_position);

            this.classList.add("you");

            positions_game.splice(index_b,1);

            wait_player = false;

            init_process_computer(wait_player);

            train_model.push(value_position);
        });
    }

    

    function init_process_computer(v) {
        if (v == false && positions_game.length > 0){ 
            console.log("Init bot");

            var v_pos_computer, index;

            setTimeout(function(){

                v_pos_computer = positions_game[random(positions_game.length)]; 
                
                index = positions_game.indexOf(v_pos_computer);

                wait_player = true;

                document.querySelector(".cell[data-position='"+v_pos_computer+"']").classList.add("computer");

                positions_game.splice(index,1);

                
            }, 2000);
        }

    }

});