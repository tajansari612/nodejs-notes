// Version

//express - ^4.21.3

// 1st Part -> 4
// 2nd Part -> 21
// 3rd Part -> 3

// 3rd Part (Last Part) - Minor Fixes (optional)
// ex- removing minor bug, improving syntax
//4.18.3 -> 4.18.4

// 2nd Part - Recommended Bug Fixes (security fix or improvement)
//ex- adding minor features, critical security bug fix, many minor fix
//4.18.4 -> 4.19.0

// 1st Part (Major Release) - Major / Breaking Update
// If you are builing new project or app then you can use new major version
// If your project build on version 4.x.x then running it on 5.x.x or 
// updating it may break the project or app

// ^ symbol : stops major change
// Install all minor and security fixes automatically
// ex- 4.18.3 -> 4.18.4 -> 4.18.6 -> 4.19.0 -> 4.21.5
// but not update automatically to 5.0.0 it may break code

// ~ symbol : stops security fix as well as major change
// Install only minor fixes
// ex- 4.18.3 -> 4.18.4 -> 4.18.6
// but not update automatically to 4.19.x or 5.x.x

// no symbole means fixed none of the updates can be intalled
// it is fixed now to that version