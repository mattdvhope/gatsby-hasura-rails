export const TimeNow = () => {

  const days_passed = (dt) => {
	  const current = new Date(dt.getTime());
	  const previous = new Date(2021, 0, 1);
	  return Math.ceil((current - previous + 1) / 86400000);
	}

	const d = new Date();

	return days_passed(new Date(d.getFullYear(), d.getUTCMonth(), d.getUTCDate()));

}