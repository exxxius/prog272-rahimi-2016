# Final

Review of the Final Projects.

## General Comments

You had a good quarter and worked hard and consistently. The final shows you managed to assimilate many of the core subjects covered in this course including:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

I think you meant to pass in this.addressIndex to delElfKey, not the whole address record. I believe this is wrong:

```javascript
var address = getByIndex(this.addressIndex);
delElfKey(address);
```

And this would be right:

```javascript
delElfKey(this.addressIndex);
```

But other than that, it is hard to find flaw with your work on CongressAddress for the final. It included extra credit and was a generally very nice effort.

You should be proud of what you accomplished this quarter. It was a pleasure having you in the course, and you showed that you have a talent well above average in our class. You were not the best, but you were one of the best students in the class. I say this just to make sure you understand that I appreciate what you have accomplished, and to make sure you know just how good you should feel. In case there is any ambiguity here: you should feel very good!

Have a great summer!

## Core Programs

- CongressAddress runs
- CongressServer runs
- CongressNative runs
  - And actually works! I get Lamar back from the database and can iterate over the data
- Heroku runs beautifully

## Data

- CongressAddress does talk to CongressServer
  - CongressServer does talk to MongoDb and has a working interface on /admin
- Congress Address looks okay on the phone, but not great.
  - I wish we had found time to work more on this. If you study the bootstrap web site you can probably learn how to fix things up.
- LocalStorage works.
- Edit Data
  - Does not appear to work

I can clear localStorage, reload from the database, and update the database from file.

## Heroku

This works very well and includes extra credit points.

## React Native

It loads and works. That's great. It seemed a little funky to me, but perhaps that is not your fault. Certainly I will give you full credit for this part of the assignment.

## Testing

You did better on earlier assignments, so I won't count this very heavily.

```
Test Suites: 3 failed, 3 passed, 6 total
Tests:       65 failed, 7 passed, 72 total
```

## Other

fyi

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary

```
Assignments: 99.02
Midterm: 100
Final: 100
Participation: 100
99.69
```

That's an A. Easily. Amazing work on the final. One of the better finals in the class.
