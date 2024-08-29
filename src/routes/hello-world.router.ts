/**
 * Start of Selection
 */
import { Request, Response, createRouter } from 'endurance-core/lib/router';
const router = createRouter();


router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
