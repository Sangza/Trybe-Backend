import cors from "cors";
import { urlencoded } from "body-parser";
import express from "express";

const app = express()

app.use(express.json())
app.use(cors())
app.use(urlencoded())