function firstWord(s) {
   let str="";
	for(let i =0;i<s.length;i++){
		if(s[i]==' '&& s.length>0 ){
			return str;
		}else if(s[i]!=' '){
			str+=s[i];
		}
		 
	}
	return str;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
