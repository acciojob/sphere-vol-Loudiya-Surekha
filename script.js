function volume_sphere() {
    //Write your code 
	let rad=document.getElementById("radius").value;
	let radius=parseFloat(rad)
	let vol=document.getElementById("volume");

	if(isNaN(radius) || radius<0){
		vol.value="NaN";
	}else{
		let volume=(4/3)*Math.PI*Math.pow(radius, 3);
		vol.value=volume.toFixed(4);
	}
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
