//const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item

// })

const myNums = [0]
// // if {} scope is taken then return should be used
// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums);

//  const newNums = []
//  myNums.forEach((num)=> {
//      if(num >= 0 && num <=25){
//        newNums.push(num)
//     }
//  })
//  console.log(newNums)
const newNums = []
myNums.forEach((num)=> {
    for (let i = 0; i <=25; i++) {
      newNums.push(i)
      
    }
    })
    console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBooks = books.filter( (bk) => bk.genre === 'History' )
  let userBooks = books.filter( (bk)=> bk.publish>=1995 && bk.genre==="History")
  console.log(userBooks);
