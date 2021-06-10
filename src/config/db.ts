import mongoose from 'mongoose';

export const connectDB = async () => {
    let mongoUri: string = '';

    if(process.env.MONGO_URI) {
        mongoUri = process.env.MONGO_URI;
    }
    
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

