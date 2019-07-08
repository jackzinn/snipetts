var userfluig = WCMAPI.userCode;
var userNamefluig = WCMAPI.userName;
var company = WCMAPI.getTenantId();

var sr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
                        <soapenv:Header/>
                        <soapenv:Body>
                        <ws:createFolder>
                            <username>` + userfluig + `</username>
                            <password></password>
                            <companyId>` + company + `</companyId>
                            <Document>
                                <item>
                                    <colleagueId>` + userfluig + `</colleagueId>
                                    <colleagueName>` + userNamefluig + `</colleagueName>
                                    <companyId>` + company + `</companyId>
                                    <documentDescription>Make_it_Easy</documentDescription>
                                            
                                    <documentType>1</documentType>
                                    <iconId>0</iconId>
                                    <parentDocumentId>0</parentDocumentId>
                                    <permissionType>2</permissionType>
                                    <phisicalFileSize>0.0</phisicalFileSize>
                                    <privateColleagueId/>
                                    <privateDocument>false</privateDocument>
                                    <protectedCopy>false</protectedCopy>
                                    
                                    <publisherId>` + userfluig + `</publisherId>
                                    <publisherName>` + userNamefluig + `</publisherName>
                                    
                                    <securityLevel>2</securityLevel>
                                    <volumeId>Default</volumeId>
                                </item>
                            </Document>
                            <security>
                                <item>
                                    <attributionType>1</attributionType>
                                    
                                    <attributionValue>` + userfluig + `</attributionValue>
                                    <companyId>` + company + `</companyId>
                                    
                                    <downloadEnabled>true</downloadEnabled>
                                    <inheritSecurity>false</inheritSecurity>
                                    <permission>true</permission>
                                    <securityLevel>2</securityLevel>
                                    <securityVersion/>
                                    <sequence>1</sequence>
                                    <showContent>true</showContent>
                                    <version>1000</version>
                                </item>
                            </security>
                            <Approvers>
                            </Approvers>
                        </ws:createFolder>
                        </soapenv:Body>
                    </soapenv:Envelope>`;

var url = WCMAPI.serverURL + "/webdesk/ECMFolderService?wsdl";

WCMAPI.Create({
    method: 'POST',
    url: url,
    async: true,
    headers: {
        'Content-Type': 'text/xml'
    },
    data: sr
});