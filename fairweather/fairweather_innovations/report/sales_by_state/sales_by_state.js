// Copyright (c) 2016, Yefri Tavarez and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Sales by State"] = {
	"filters": [
		{
			"label": __("From Date"),
			"fieldtype": "Date",
			"fieldname": "from_date",
			"default": frappe.datetime.month_start(),
		},
		{
			"label": __("To Date"),
			"fieldtype": "Date",
			"fieldname": "to_date",
			"default": frappe.datetime.month_end(),
		},
		{
			"label": __("Customer"),
			"fieldtype": "Link",
			"fieldname": "customer",
			"options": "Customer",
		},
		{
			"label": __("State"),
			"fieldtype": "Link",
			"fieldname": "state",
			"options": "State",			
		},
		{
			"label": __("Address Type"),
			"fieldtype": "Select",
			"fieldname": "address_type",
			"default": "Billing",
			"options": "\nBilling\nShipping",
		}
	]
}
