import { Product } from "@/types/Product";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function CardProduct(props: Product) {
  return (
    <Card className="w-96" placeholder={undefined} shadow={false}>
      <CardHeader
        shadow={false}
        floated={false}
        className="h-96"
        placeholder={undefined}
      >
        <img
          src={props.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody placeholder={undefined}>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium"
            placeholder={undefined}
          >
            {props.title}
          </Typography>
          {props.onState ? (
            <Typography
              color="blue-gray"
              className="font-medium"
              placeholder={undefined}
            >
              ${props.price}
            </Typography>
          ) : (
            <Typography
              color="blue-gray"
              className="font-medium"
              placeholder={undefined}
            >
              Liên hệ
            </Typography>
          )}
        </div>
        <Typography
          placeholder={undefined}
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {props.description}
        </Typography>
      </CardBody>
    </Card>
  );
}
