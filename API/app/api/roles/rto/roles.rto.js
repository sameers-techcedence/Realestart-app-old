class RolesRto {

	constructor(lang, admin) {
		this.RoleID = admin.RoleID
		// this.RoleNameInEn = admin.RoleNameInEn
		// this.RoleNameInAr = admin.RoleNameInAr
		this.RoleName = ""
		this.createdAt = admin.createdAt
		this.CreatedBy = admin.CreatedBy
		this.updatedAt = admin.updatedAt
		this.IsActive = admin.IsActive
		switch (lang) {
			case "en":
				this.RoleName = admin.RoleNameInEn
				break
			case "ar":
				this.RoleName = admin.RoleNameInAr
				break
			default:
				this.RoleName = admin.RoleNameInEn
				break
		}
	}
}


module.exports = RolesRto