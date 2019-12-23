import * as mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/backend-app-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

