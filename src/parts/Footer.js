import React from "react";

import Button from "elements/Button"
import IconText from "./IconText"

export default function Footer () {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col" style={{width:350}}>
						<IconText />
						<p className="brand-tagline">
							Your beauty holyday instantly and memorable.
						</p>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">For beginners</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/register">
								New Account
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/properties">
								Start Booking a Room
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/use-payment">
								Use payment
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">Explore Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/career">
								Our Career
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/privacy">
								Privacy
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/terms">
								Terms & Condition
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-3">
						<h6 className="mt-2">Explore Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" isExternal href="mailto:support@staycation.id">
									support@staycation.id
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="tel:+622102122081996">
								021 - 2208 - 1996
								</Button>
							</li>
							<li className="list-group-item">
							<span>Alamat kantor</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col text-center copyrights">
						Copyright 2021
					</div>
				</div>
			</div>
		</footer>
	)
}