import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';
import { Ratings } from './ui/ratings';

interface Props {
  title: string;
  author: string;
  review: string;
  rating: number;
  tags: readonly string[];
  link?: string;
}

export function ReadingCard({
  title,
  author,
  review,
  rating,
  tags,
  link
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="my-1">
        <div className="space-y-1">
          <CardTitle className="text-bold text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
            <div className="text-sm font-medium">{author}</div>
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <CardDescription className="font-mono text-xs">
            {review}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Ratings size={10} rating={rating} />
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
