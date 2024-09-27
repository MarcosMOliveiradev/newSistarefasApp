import { TableCell, TableRow } from '@/components/ui/table'
import { Skeleton } from '../ui/skeleton';

export function TableSkeleton() {
  return (
    <TableRow >
        <TableCell>
            <Skeleton className="w-[80px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[80px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[80px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[100px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[90px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[90px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[80px] h-5" />
        </TableCell>
        <TableCell>
            <Skeleton className="w-[80px] h-5" />
        </TableCell>
    </TableRow>
    
  );
}