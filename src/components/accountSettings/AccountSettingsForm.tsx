import useUserData from "../../hooks/useUserData";

const AccountSettingsForm = (): JSX.Element => {
  const { userData } = useUserData();

  return (
    <div className="card w-96 animate-slideUp bg-base-200 shadow-xl">
      <div className="card-body">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">First Name *</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={userData?.firstName}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Last Name *</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={userData?.lastName}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Age *</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            min={1}
            value={userData?.age}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={userData?.email}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Avatar Url</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={userData?.avatarUrl}
          />
        </label>

        <div className="mt-5 flex items-center justify-center">
          <button className="btn btn-secondary">Save Data</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
