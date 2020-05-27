import { ExtractJwt } from "passport-jwt";

let objConfig = {
    secretOrKey: '1q2w3e4r!@#$%werty', 
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}

export default objConfig