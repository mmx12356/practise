var peo_score = 50;

if(peo_score > 60)
	console.log("及格");
else
	console.log("不及格");
	
console.log('"30"==30 is', "30" == 30);
console.log('"30"!=30 is', "30" != 30);
/*型態也必須相等*/
console.log('"30"===30 is', "30" === 30);
console.log('"30"!==30 is', "30" !== 30);

sum=0;
i=1;
while (i<=10){
	sum = sum + i;
	console.log("i=",i,"sum=",sum);
	i = i + 1
}

sum=0;
i=0;
for(i=1;i<=10;i++){
	if(i==3) continue;
	sum = sum+i;
	console.log("i=",i,"sum=",sum);
	if(i==7) break;
}

var a=[1,3,5,7,9]

for (i=0;i<a.length;i++){
	console.log("a[%d]=%d",i,a[i])
}

var a=[1,2,3]
var b=[3,2,1]

for (i=0;i<a.length;i++){
	for (j=0;j<b.length;j++){
		if(i==j){
			console.log("a+b",a[i]+b[j])
		}
	}
}

var aaa={ a:"abc",b:"erf"}
aaa.c= "eee";
for (var key in aaa){
	console.log("key=",key,"value=",aaa[key])
}

function min(){
	var m = arguments[0];
	for (var i in arguments) {
		if(arguments[i] < m)
			m = arguments[i];
		
	}
	return m;
}
var aa = min(1,8,9,4);
console.log(aa);


