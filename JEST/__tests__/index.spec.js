//Testing arrays
const Users = [
    'sourabh',
    'alpana',
    'sagar'
];
test('test for a value in Users', function() {
     expect(Users).toEqual(expect.arrayContaining(['alpana', 'sourabh']));
})

