const authRouter = require('./AuthRouter');
const accountRouter = require('./AccountRouter');
const appointmentRouter = require('./AppointmentRouter');
const roomRouter = require('./RoomRouter');
const slotRouter = require('./SlotRouter');
const treatment_profileRouter = require('./Treatment_profileRouter');
const treatment_inRouter = require('./Treatment_InRouter');
const TransactionRouter = require('./TransactionRouter');
const admin = require('./admin');
const Amount = require('./amount');
const balance = require('./balance_detail');


function route(app) {
    app.use('/auth', authRouter);

    app.use('/account', accountRouter);

    app.use('/appointment', appointmentRouter);

    app.use('/room', roomRouter);

    app.use('/slot', slotRouter);

    app.use('/treatment_profile', treatment_profileRouter);

    app.use('/treatmentin', treatment_inRouter);
    app.use('/transaction', TransactionRouter);
    app.use('/amount', Amount);
    app.use('/balance', balance);

    // api for admin
    app.use('/admin', admin);
    
} 

module.exports = route;