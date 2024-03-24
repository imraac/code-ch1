function grade(marks){

    if (marks > 79){
        // if the mark is greater than 79 i will return A
        return "A";
    }else if(marks >= 60 && marks <79) {
        // same to this, it will return B
        return "B";
    }else if(marks >= 49 && marks < 60) {
        // if the mark is between 49 and 60 it will return C
        return "C";
    }else if(marks >= 40 && marks < 49) {
        // this is similar to A,B and C
        return "D";
    }else if(marks <40) {
        //  if the mark is smaller than 40, it will give a grade of E
        return "E";}
    }