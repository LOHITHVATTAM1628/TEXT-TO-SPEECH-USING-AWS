# 🗣️ AWS Serverless Text-to-Speech Web App using Amazon Polly

This serverless web application converts user-submitted text into speech using **Amazon Polly**. Users can choose a voice, enter text, and receive a downloadable or playable audio file. It's built entirely with AWS managed services.

---

## 📌 Features

* 🎙️ Text-to-Speech using Amazon Polly
* 🧑‍💻 User-selectable voice options
* 🪄 Asynchronous processing using Lambda + SNS
* 🧾 Stores and lists conversion history
* 📤 Audio stored in S3 with public access

---

## 🧱 Architecture Overview
![arc_diagram](https://github.com/user-attachments/assets/66a9df62-5c21-409c-b2fe-19d2f09ccd89)


> 📍 All resources deployed in `us-east-1` region.

---

## 🔧 AWS Components Used

| Component        | Role                                                           |
| ---------------- | -------------------------------------------------------------- |
| **API Gateway**  | Exposes endpoints for frontend to interact with Lambda         |
| **AWS Lambda**   | Contains business logic (submit, convert, retrieve)            |
| **Amazon Polly** | Converts text to MP3 audio using selected voice                |
| **Amazon S3**    | Stores audio files and serves them publicly                    |
| **Amazon SNS**   | Triggers asynchronous audio conversion                         |
| **DynamoDB**     | Stores text entries, selected voices, statuses, and audio URLs |

---

## 📁 File Structure

```
serverless-web/
├── index.html              # Web frontend UI
├── styles.css              # CSS styling
├── scripts.js              # Frontend JS logic (AJAX, DOM)
├── error.html              # Fallback error page

lambda/
├── add_new_posts.py        # Lambda: Handles text submission
├── convert_text_to_audio.py# Lambda: Polly + S3 + DynamoDB update
├── read_table_items.py     # Lambda: Fetch all entries from DynamoDB
```

---

## ⚙️ Environment Variables (for Lambda)

| Variable        | Description                |
| --------------- | -------------------------- |
| `DB_TABLE_NAME` | Name of the DynamoDB table |
| `BUCKET_NAME`   | Name of the S3 bucket      |
| `SNS_TOPIC`     | ARN of the SNS Topic       |

---

## 🚀 How to Deploy

1. **Create AWS Resources**:

   * DynamoDB table (with text, voice, status, audio\_url)
   * S3 bucket (enable public read)
   * SNS topic
   * API Gateway with three Lambda integrations

2. **Upload Lambda Code**:

   * Deploy `add_new_posts.py`, `convert_text_to_audio.py`, and `read_table_items.py`

3. **Set Environment Variables**:

   * Use AWS Console or `aws lambda update-function-configuration`

4. **Serve Frontend**:

   * Deploy `index.html`, `scripts.js`, `styles.css` on [S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html), GitHub Pages, or localhost.

---

## 💻 Usage Instructions

1. Open the web app.
2. Select a voice and input your text.
3. Click **"Process"**.
4. Check the table for status updates.
5. Once ready, click the audio play button 🎧.

---

## 📎 Notes

* Ensure **all resources are in the `us-east-1` region** for consistency.
* This is a **demo/learning project**. Add authentication, logging, and cost controls for production use.

---


