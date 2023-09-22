import Link from "next/link";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

async function fetchArticles() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=ufo&from=2023-08-25&sortBy=publishedAt&language=en&apiKey=4ba85e6ee7314204b25fb5f02144f71a"
  );
  const articles = await response.json();
  return articles;
}

const NewsPage = async () => {
  const articles = await fetchArticles();

  return (
    <Box>
      {articles.articles.map((article) => (
        <Link href={article.url}>
          <Box key={article.source.name} width="300px" mb={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://source.unsplash.com/random"
                }
                alt="image about the article"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {article.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default NewsPage;
