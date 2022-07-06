'use strict';
module.exports = {
    responseStatusBody(Body, Status) {
        ctx.status = Status;
        ctx.Body = Body;
        return true
    } 
}