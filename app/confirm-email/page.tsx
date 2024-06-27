const ConfirmEmailPage = ({
  searchParams,
}: {
  searchParams: { email: string };
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="block scroll-m-20 text-xl  tracking-tight lg:text-2xl">
        Thank you ! You just created an account with the email address:
        <p className="w-full text-center text-indigo-400 font-bold">
          {searchParams.email}{" "}
        </p>
      </h1>
    </div>
  );
};
export default ConfirmEmailPage;
