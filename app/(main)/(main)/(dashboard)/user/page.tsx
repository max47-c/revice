import EventCalendar from "@/components/EventCalendar";
import UserRequestsHistory from "@/components/UserRequestHistory";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const UserPage = async({ }) => {
  const user = currentUser();
console.log(user?.email)
  const user1 = await prisma.bloodRequest.findMany({
    where: { email: user?.email },

    select: {
      name: true,
      email: true,
      bloodType: true,
      note: true,
      date: true,
      bloodQty: true,
      status: true,
    }
  });

  return (
    <div className="p-4 flex flex-col gap-8 xl:flex-row">
      {/* Left */}
      <div className="mt-4 bg-white rounded-md p-4 xl:w-2/3">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Blood Request Status</h1>
          <span className="text-sm text-gray-500 cursor-pointer">View All</span>
        </div>
        <UserRequestsHistory data={user1} limit={10} />
      </div>

      {/* Right */}
      <div className="flex-grow w-full xl:w-1/3 flex flex-col gap-8">
        <div className="bg-white rounded-md h-auto lg:h-[500px] p-4">
          <EventCalendar />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
