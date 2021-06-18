import "./WidgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Santo</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Santo</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Santo</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://eiko.ai/eiko/meero/8R9LFPXTkUU_McipJ22yTb3mXjo/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvZDU2MWU3NzQtZjNlNS00NmIzLWJkZTMtMTAyMzhiMzRmYWU5LmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Santo</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
