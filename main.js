let mark = prompt("enter mark");

switch(mark>0){
     case ((mark<=100) && (mark>=90)):
		     console.log("grade-A");
		break;
		
	case ((mark<=80) && (mark>=75)):
		    console.log("grade-B");
		break;
		
	case ((mark<=60) && (mark>=40)):
		    console.log("grade-C");
		break;
		
	default:
	    console.log("enter diff mark");
		
}