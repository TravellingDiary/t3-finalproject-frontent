async function create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin=false){ 
    console.log(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin);

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          regionsOfInterest: regionsOfInterest,
          countriesOfInterest: countriesOfInterest,
          isAdmin: isAdmin
        }),
      }
    );

    let data = await result.json();

    // Need to get rid of this, just leaving it in to see that it works
    console.log(data);

    return data;

  }

module.exports = {create}