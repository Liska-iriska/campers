import { getSingleCamper } from "@/lib/serverApi";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import CamperDetailsClient from "./CamperDetails.client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getSingleCamper(camperId);

    return {
      title: `TravelTrucks | ${camper.name}`,
      description: camper.description
        ? camper.description.slice(0, 100)
        : "Truck description",
      openGraph: {
        title: `TravelTrucks | ${camper.name}`,
        description: camper.description
          ? camper.description.slice(0, 100)
          : "Truck description",
        url: `https://campers-beryl-theta.vercel.app/catalog/${camperId}`,
        siteName: "TravelTrucks",
        images: [
          {
            url:
              camper.gallery?.[0]?.original ||
              "https://campers-beryl-theta.vercel.app/img/main-img@2x.webp",
            width: 1200,
            height: 630,
            alt: camper.name,
          },
        ],
        type: "website",
      },
    };
  } catch {
    return {
      title: "TravelTrucks | Truck Details",
      description: "Find your perfect campervan for travel",
    };
  }
}

const CamperDetails = async ({ params }: Props) => {
  const { camperId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getSingleCamper(camperId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
};

export default CamperDetails;
