function ships(length){
    let shipLength=[]
    for(let i=0;i<=length;i++){
        shipLength.push(i)
    }
    
    return{
        shipLength,
        // damage,
        // hasSunk,
        hit(num){
            // console.log(shipLength.indexOf(num))
            shipLength.splice(num)
            return shipLength
        },
        isSunk(){

        }
    }
}

boat = ships(2)

// test('hit will return if the number has been hit',()=>{
//     expect(boat.shipLength).toEqual([0,1,2])}
// )

test('hit will return if the number has been hit',()=>{
    expect(boat.hit(1)).toBe("hitted")
})