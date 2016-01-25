document.getElementById("convert").addEventListener("click", main_funct);

function unsigned_dec(dec_M) {

	var bin = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var arr_ind = 15;
	for (var base = parseInt(Math.abs(dec_M)); base > 0; base = parseInt(base / 2)){
		
		if (base % 2 == 0) {

			bin[arr_ind] = 0;
		}

		else {

			bin[arr_ind] = 1;

		}

		arr_ind--;

	}
	
	return bin;
	
}

function float_dec(dec_M, fl_ind) {

	var fl_bin = [0,0,0,0,0,0,0,0];

	var fl_point = Math.abs(dec_M - fl_ind);
	var ind_arr = 0;
	while (fl_point != 1) {
		fl_point *= 2;

		if (fl_point < 1) {
			fl_bin[ind_arr] = 0;

			ind_arr++;
		}
		if (fl_point > 1) {
			fl_bin[ind_arr] = 1;
			fl_point--;
			ind_arr++;

		}

		if (fl_point == 1) {
			fl_bin[ind_arr] = 1;
			break;
		}

		if (ind_arr == 7) {
			break;
		}
	}

	return fl_bin;
}

function signed_dec(bin_signed) {

	for (var pl_ind = 15; pl_ind >= 0; pl_ind--) {

		if (bin_signed[pl_ind] == 0) {

			bin_signed[pl_ind] = 1;

		}

		else {

			bin_signed[pl_ind] = 0;

		}

	}


	for (var pl_one = 15; pl_one >= 0; pl_one--) {

		if (bin_signed[pl_one] == 0) {
			bin_signed[pl_one] = 1;
			break;

		}
		else {
			bin_signed[pl_one] = 0;

		}

	}
	
	return bin_signed;


}

function main_funct() {
	
	var dec_N = parseFloat(document.getElementById('dec_num').value);
	if (dec_N != dec_N) {document.getElementById("answer").innerHTML = ' Please input a valid number'}
	else {
	var bin_main = unsigned_dec(dec_N);
	var fl_ind = parseInt(dec_N);
	var fl_bin;
	
	if (dec_N < 0) {
		bin_main = signed_dec(bin_main);
	}

	var bin_1 = bin_main.splice(0,4);
	var bin_2 = bin_main.splice(0,4);
	var bin_3 = bin_main.splice(0,4);
	var bin_4 = bin_main.splice(0,4);
	var float_1;
	var float_2;
	
		
	if (fl_ind != dec_N) {
		fl_bin = float_dec(dec_N, fl_ind);
		float_1 = fl_bin.splice(0,4);
		float_2 = fl_bin.splice(0.4);
	}

	
	if (fl_ind == dec_N) {
		document.getElementById("answer").innerHTML = (bin_1.join("") + " " + bin_2.join("") + " " + bin_3.join("")+ " " + bin_4.join("") );
	}
	
	else {

		document.getElementById("answer").innerHTML = (bin_1.join("") + " " + bin_2.join("") + " " + bin_3.join("")+ " " + bin_4.join("") + "." +  float_1.join("") + " " + float_2.join(""));
	}
}
}