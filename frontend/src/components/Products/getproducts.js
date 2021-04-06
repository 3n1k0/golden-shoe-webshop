require("dotenv").config();
const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://AnnieKostolany:${process.env.MONGO_DB_PASSWORD}@cluster0.qf5xa.mongodb.net/Cluster0?retryWrites=true&w=majority`;

app.get("/get-products", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const collection = client.db("Cluster0").collection("listingsAndReviews");
  const query = {};
  const options = {
    projection: {
      _id: 1,
      name: 1,
      summary: 1,
      bedrooms: 1,
    },
  };

  const posts = await collection.find(query, options).toArray();

  res.json(posts);
});

app.get("/get-product/:name", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const collection = client.db("Cluster0").collection("listingsAndReviews");
  const query = { id: req.params.id };
  const options = {
    projection: {
      _id: 1,
      name: 1,
      summary: 1,
      bedrooms: 1,
    },
  };

  const posts = await collection.find(query, options).toArray();

  res.json(posts);
});

// app.post(`/add-post/${process.env.SECRET_URL}`, (req, res) => {
//   console.log(req.body);
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   async function run() {
//     try {
//       await client.connect();
//       const database = client.db("Blog");
//       const collection = database.collection("Posts");
//       // create a document to be inserted
//       const doc = req.body;
//       const result = await collection.insertOne(doc);
//       console.log(
//         `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
//       );
//     } finally {
//       await client.close();
//     }

//     res.send(200);
//   }
//   run().catch(console.dir);
// });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
