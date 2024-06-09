import React from "react";

import useAccountSettingsForm from "../../hooks/useAccountSettingsForm";
import useUserData from "../../hooks/useUserData";

import { IUserData } from "../../models/contracts/IUserData";

const AccountSettingsForm = (): JSX.Element => {
  const { userData } = useUserData();
  const { submitForm } = useAccountSettingsForm();

  const [formUserData, setFormUserData] = React.useState<IUserData>({
    ...userData!,
  });

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
            value={formUserData?.firstName}
            onChange={(e) =>
              setFormUserData({ ...formUserData, firstName: e.target.value })
            }
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
            value={formUserData?.lastName}
            onChange={(e) =>
              setFormUserData({ ...formUserData, lastName: e.target.value })
            }
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
            value={formUserData?.age}
            onChange={(e) =>
              setFormUserData({ ...formUserData, age: Number(e.target.value) })
            }
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
            value={formUserData?.email}
            onChange={(e) =>
              setFormUserData({ ...formUserData, email: e.target.value })
            }
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
            value={formUserData?.avatarUrl}
            onChange={(e) =>
              setFormUserData({ ...formUserData, avatarUrl: e.target.value })
            }
          />
        </label>

        <div className="mt-5 flex items-center justify-center">
          <button
            className="btn btn-secondary"
            onClick={() => submitForm(formUserData)}
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
