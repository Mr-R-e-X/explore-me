import mongoose, { Schema, Document } from "mongoose";

export interface QueryType extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const querySchema: Schema<QueryType> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const QueryModel =
  (mongoose.models.Query as mongoose.Model<QueryType>) ||
  mongoose.model<QueryType>("Query", querySchema);

export default QueryModel;
