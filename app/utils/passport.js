import Passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

Passport.use(
  new LocalStrategy((username, password, done) => {
    // get User based one username, password
    const user = {};
    // if Unauthorized:
    if (false)
      return done(null, false, { message: 'Credentials are incorrect' });

    return done(null, user);
  })
);

export default Passport.initialize;
