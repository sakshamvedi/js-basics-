const obj = [
    {
        id: 1, name: "saksham", dob : 2002
    },
     {
        id: 2, name: "vishu", dob : 2000
    },
     {
        id: 3, name: "rishu", dob : 1998
    },
     {
        id: 4, name: "nishu", dob : 1992
    },
     {
        id: 5, name: "dishu", dob : 1990
    },
]


/// Map function , this function return entire new array , you can use callback function inside the array to 
// manipulate the array functional properties 
var arr = obj.map((data) => {
    if (data.dob >= 2000)
    {
        return data.name
    }
   
})


// With the help of this function you can sort the array (desc. or aesc. ) what  you want , it also alter 
// the original array 

var sorted = obj.sort((a,b) => {
    return a.dob - b.dob;
});


// Array Filter Method it return the whole object when it found the matching condition 

var filtered = obj.filter((data) => {
    if (data.name.startsWith("s")) {
        return true;
    }
})


// Reduce the array 

var reduced = obj.reduce((total, born) => {
    return total.dob > born.dob;

})



// Array Logic to find the person who born first and who born late 

const maxdob = obj.reduce((prev, current) => {
    return (prev.dob < current.dob) ? prev : current;
})

console.log(maxdob);

// Sort the people when data type is string 


const people = ["saksahm" , "tiya" , "vishu" , "twarit"];
const data = people.sort((namea , nameb) => {
    return namea>nameb ? -1 : 1;
})

console.log(data);

// Counting the number of objects/vehicle in the array 
