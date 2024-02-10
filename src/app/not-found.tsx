import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[420px] space-y-5">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl lg:text-7xl">404</CardTitle>
          <CardDescription>
            The page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
