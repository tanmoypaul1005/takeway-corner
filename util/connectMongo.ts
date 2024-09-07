import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI: string | undefined = process.env.MONGODB_URI ?? process.env.NEXT_PUBLIC_BASE_URL_MONGODB_URI;

interface Cached {
  connection?: Mongoose;
  promise?: Promise<Mongoose>;
}

const cached: Cached = {};

async function connectMongo(): Promise<Mongoose> {
  if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
}

export default connectMongo;