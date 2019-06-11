    var photoProfile = WCMAPI.userLogin;
    let _getProfileImg = function (id) {
        return $http({
            method: 'GET',
            url: '/profile/image/' + photoProfile + '/X_SMALL_PICTURE',
            async: true,
            data: {

            }
        });
    };

    let _createFolderInsideFolder = function (description, parentId) {

        return $http({
            method: 'POST',
            url: '/api/public/ecm/document/createFolder',
            async: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "description": description,
                "parentId": parentId,
                "securityLevel": "1",
                "userPermission": "1"
            }
        });
    };

    let _sendDocuments = function (document, parentId) {


        return $http({
            method: 'POST',
            url: '/api/public/ecm/document/createFolder',
            async: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "description": document.name,
                "parentId": parentId,
                "attachments": [{
                    "fileName": document.name
                }],
            }),
        }).catch(function (err) {
            return err;
        });
    }

    let _searchFolder = function (id) {

        return $http({
            method: 'GET',
            url: '/api/public/2.0/documents/getActive/' + id,
            async: true,

        }).catch(function (err) {
            return err;
        });
    }

    let _createFolder = function () {

        var userfluig = WCMAPI.userCode;
        var datas = new Date().toISOString();
        var company = WCMAPI.getTenantId();

        var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">';
        sr += '<soapenv:Header/>';
        sr += '<soapenv:Body>';
        sr += '<ws:createFolder>';
        sr += '<username>' + userfluig + '</username>';
        sr += '<password></password>';
        sr += '<companyId>' + company + '</companyId>';
        sr += '<Document>';
        sr += '<item>';
        sr += '<accessCount>0</accessCount>';
        sr += '<activeVersion>true</activeVersion>';
        sr += '<additionalComments/>';
        sr += '<allowMuiltiCardsPerUser>true</allowMuiltiCardsPerUser>';
        sr += '<approvalAndOr>false</approvalAndOr>';
        sr += '<approved>true</approved>';
        sr += '<colleagueId>' + userfluig + '</colleagueId>';
        sr += '<companyId>' + company + '</companyId>';
        sr += '<crc>0</crc>';
        sr += '<createDate>' + datas + '</createDate>';
        sr += '<createDateInMilliseconds>1540857600000</createDateInMilliseconds>';
        sr += '<datasetName/>';
        sr += '<deleted>false</deleted>';
        sr += '<documentDescription>Make_it_Easy</documentDescription>';
        sr += '<documentType>1</documentType>';
        sr += '<documentTypeId/>';
        sr += '<downloadEnabled>false</downloadEnabled>';
        sr += '<draft>false</draft>';
        sr += '<expirationDate>' + datas + '</expirationDate>';
        sr += '<expires>false</expires>';
        sr += '<forAproval>false</forAproval>';
        sr += '<iconId>0</iconId>';
        sr += '<imutable>true</imutable>';
        sr += '<indexed>true</indexed>';
        sr += '<inheritSecurity>true</inheritSecurity>';
        sr += '<internalVisualizer>true</internalVisualizer>';
        sr += '<isEncrypted>false</isEncrypted>';
        sr += '<keyWord/>';
        sr += '<languageId>pt_BR</languageId>';
        sr += '<lastModifiedDate>' + datas + '</lastModifiedDate>';
        sr += '<metaListId>0</metaListId>';
        sr += '<metaListRecordId>0</metaListRecordId>';
        sr += '<onCheckout>false</onCheckout>';
        sr += '<parentDocumentId>0</parentDocumentId>';
        sr += '<permissionType>0</permissionType>';
        sr += '<phisicalFile/>';
        sr += '<phisicalFileSize>0.0</phisicalFileSize>';
        sr += '<privateDocument>false</privateDocument>';
        sr += '<protectedCopy>false</protectedCopy>';
        sr += '<publisherId>' + userfluig + '</publisherId>';
        sr += '<restrictionType>0</restrictionType>';
        sr += '<rowId>0</rowId>';
        sr += '<securityLevel>2</securityLevel>';
        sr += '<topicId>0</topicId>';
        sr += '<translated>false</translated>';
        sr += '<UUID>37FF2FC1-0FF8-4222-9386-002B194A8ABA</UUID>';
        sr += '<updateIsoProperties>false</updateIsoProperties>';
        sr += '<userNotify>false</userNotify>';
        sr += '<validationStartDate>' + datas + '</validationStartDate>';
        sr += '<version>1000</version>';
        sr += '<versionDescription/>';
        sr += '<volumeId>Default</volumeId>';
        sr += '</item>';
        sr += '</Document>';
        sr += '<security>';
        sr += '<item>';
        sr += '<attributionType>3</attributionType>';
        sr += '<attributionValue>all</attributionValue>';
        sr += '<companyId>' + company + '</companyId>';
        sr += '<documentId></documentId>';
        sr += '<downloadEnabled>true</downloadEnabled>';
        sr += '<permission>true</permission>';
        sr += '<securityLevel>2</securityLevel>';
        sr += '<securityVersion>false</securityVersion>';
        sr += '<sequence>1</sequence>';
        sr += '<showContent>true</showContent>';
        sr += '<version>1000</version>';
        sr += '</item>';
        sr += '</security>';
        sr += '<Approvers>';
        sr += '</Approvers>';
        sr += '</ws:createFolder>';
        sr += '</soapenv:Body>';
        sr += '</soapenv:Envelope>';

        var url = WCMAPI.serverURL + "/webdesk/ECMFolderService?wsdl";

        return $http({
            method: 'POST',
            url: url,
            async: true,
            headers: {
                'Content-Type': 'text/xml'
            },
            data: sr
        });
    }

    let _createSubFolder = function (nameFolder, parentId) {

        var userfluig = WCMAPI.userCode;
        var datas = new Date().toISOString();
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
                                            <accessCount>0</accessCount>
                                            <activeVersion>true</activeVersion>
                                            <additionalComments/>
                                            <allowMuiltiCardsPerUser>true</allowMuiltiCardsPerUser>
                                            <approvalAndOr>false</approvalAndOr>
                                            <approved>true</approved>
                                            <colleagueId>` + userfluig + `</colleagueId>
                                            <companyId>` + company + `</companyId>
                                            <crc>0</crc>
                                            <createDate>` + datas + `</createDate>
                                            <createDateInMilliseconds>1540857600000</createDateInMilliseconds>
                                            <datasetName/>
                                            <deleted>false</deleted>
                                            <documentDescription>`+nameFolder+`</documentDescription>
                                            <documentType>1</documentType>
                                            <documentTypeId/>
                                            <downloadEnabled>false</downloadEnabled>
                                            <draft>false</draft>
                                            <expirationDate>` + datas + `</expirationDate>
                                            <expires>false</expires>
                                            <forAproval>false</forAproval>
                                            <iconId>0</iconId>
                                            <imutable>true</imutable>
                                            <indexed>true</indexed>
                                            <inheritSecurity>false</inheritSecurity>
                                            <internalVisualizer>true</internalVisualizer>
                                            <isEncrypted>false</isEncrypted>
                                            <keyWord/>
                                            <languageId>pt_BR</languageId>
                                            <lastModifiedDate>` + datas + `</lastModifiedDate>
                                            <metaListId>0</metaListId>
                                            <metaListRecordId>0</metaListRecordId>
                                            <onCheckout>false</onCheckout>
                                            <parentDocumentId>`+parentId+`</parentDocumentId>
                                            <permissionType>2</permissionType>
                                            <phisicalFile/>
                                            <phisicalFileSize>0.0</phisicalFileSize>
                                            <privateDocument>false</privateDocument>
                                            <protectedCopy>false</protectedCopy>
                                            <publisherId>` + userfluig + `</publisherId>
                                            <restrictionType>1</restrictionType>
                                            <rowId>0</rowId>
                                            <securityLevel>2</securityLevel>
                                            <topicId>0</topicId>
                                            <translated>false</translated>
                                            <UUID>37FF2FC1-0FF8-4222-9386-002B194A8ABA</UUID>
                                            <updateIsoProperties>false</updateIsoProperties>
                                            <userNotify>false</userNotify>
                                            <validationStartDate>` + datas + `</validationStartDate>
                                            <version>1000</version>
                                            <versionDescription/>
                                            <volumeId>Default</volumeId>
                                        </item>
                                    </Document>
                                    <security>
                                        <item>
                                            <attributionType>1</attributionType>
                                            <attributionValue>`+ userfluig +`</attributionValue>
                                            <companyId>` + company + `</companyId>
                                            <documentId></documentId>
                                            <downloadEnabled>true</downloadEnabled>
                                            <permission>true</permission>
                                            <securityLevel>2</securityLevel>
                                            <securityVersion>false</securityVersion>
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

        return $http({
            method: 'POST',
            url: url,
            async: true,
            headers: {
                'Content-Type': 'text/xml'
            },
            data: sr
        });
    }

    let _updateFolderTitle = function (id, description) {
        return $http({
            method: 'POST',
            url: '/api/public/ecm/document/updateDescription',
            async: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "id": id,
                "description": description,

            }
        });
    }

    let _createDocumentInECM = function (document, parentId) {

        return $http({
            method: 'POST',
            url: '/api/public/ecm/document/createDocument',
            async: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "description": document,
                "parentId": parentId,
                "attachments": [{
                    "fileName": document
                }],
            }),
        }).catch(function (err) {
            return err;
        });
    }

    let _getDocumentsToShow = (docId) => {

        return $http({
            method: 'GET',
            url: "/api/public/2.0/documents/getDownloadURL/" + docId,
            async: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        }).catch(function (err) {
            return err;
        })
    }

    let _deleteDocument = (docId) => {

        return $http({
            method: 'POST',
            url: "/api/public/2.0/documents/deleteDocument/" + docId,
            async: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }


    let _verificarSePastaExiste = () => {

        let nameFolder = "Make_it_Easy";

        let idFolder = undefined;

        WCMAPI.Create({
            url: WCMAPI.serverURL + "/api/public/search/advanced",
            contentType: "application/json",
            data: {
                contentSearch: false,
                endPeriod: null,
                folderToSearch: "0",
                limit: 1,
                offset: 0,
                ordering: "RELEVANT",
                pattern: nameFolder,
                period: null,
                Types: ["FOLDER"],
                startPeriod: null
            },
            async:true,
            success: function (response) {
                var pastas = [];

                response.content.items.forEach(function (el, index, array) {
                    if (el.fields.DocumentSubType == "FOLDER" && el.fields.DocumentDescription == nameFolder) {
                        pastas.push(el);
                    }
                });

                if (pastas.length == 0) { 

                    idFolder = pastas.length;
                    
                }else{

                    idFolder = pastas[0].fields.DocumentId
                }
                
            },
            error: function (err) {
                FLUIGC.toast({
                    message: 'Erro ao consultar pastas. Contate o suporte da IV2 via suporte@iv2.com.br.',
                    type: 'danger'
                });
            }
        });

        return idFolder;
    };

    let _searchFolderFluigExist = (idFolder) => {

        return $http({
            method: 'GET',
            url: "/api/public/social/community/document/" + idFolder,
            async: true
        });
    };

    let _adicionarRemoverUserFolder = (doc, listUsers) => {

        let listadeusuarios = new Array();
        listUsers.forEach((value)=>{                   
            listadeusuarios.push({
                "attributionType" : 1,
                "attributionValue" : value.memberId,
                "downloadEnabled" : true,
                "securityLevel" : 2,
                "downloadEnabled" : true,
                "showContent" : true,
            });
        });

        WCMAPI.Create({
            url: WCMAPI.serverURL + '/api/public/2.0/documents/setDocumentPermissions',
            contentType: 'application/json',
            dataType: 'application/json',
            async:true,
            data: {
                "documentId": doc,
                "documentPermissionVO": listadeusuarios  
            },
            error: function(error) {
                
            },
            success: function(data) {
            }
        });
    }

    let _verifyExistDocument =  (idDoc) => {


        return $http({
            method: 'GET',
            url: WCMAPI.serverURL + "/api/public/social/community/document/" + idDoc,
            async: true
        });
    }

    let _updateFolderPermissions = (docId, listUsers, nameFolder) =>{

        let userfluig = WCMAPI.userCode;
        let datas = new Date().toISOString();
        let company = WCMAPI.getTenantId();
        let listadeusuarios = new Array();

        function OBJtoXML(obj) {
            var xml = '';
            for (var prop in obj) {
                if (obj[prop] instanceof Array) {
                    for (var array in obj[prop]) {
                        xml += '<' + prop + '>';
                        xml += OBJtoXML(new Object(obj[prop][array]));
                        xml += '</' + prop + '>';
                    }
                } else {
                    xml += '<' + prop + '>';
                    typeof obj[prop] == 'object' ? xml += OBJtoXML(new Object(obj[prop])) : xml += obj[prop];
                    xml += '</' + prop + '>';
                }
            }
            var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
            return xml;
        }

        listUsers.forEach((value)=>{   
            listadeusuarios.push(
                { item :{
                    attributionType: "1",
                    attributionValue: value.memberId,
                    companyId: company,
                    documentId: docId,
                    downloadEnabled:"true",
                    permission:"true",
                    securityLevel:"2",
                    sequence:"1",
                    version:"1000"
                }}
            );
        });

        var services = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
                        <soapenv:Header/>
                            <soapenv:Body>
                                <ws:updateFolder>
                                    <username>` + userfluig + `</username>
                                    <password></password>
                                    <companyId>` + company + `</companyId>
                                    <Document>
                                        <item>
                                            <accessCount>0</accessCount>
                                            <activeVersion>true</activeVersion>
                                            <additionalComments/>
                                            <allowMuiltiCardsPerUser>true</allowMuiltiCardsPerUser>
                                            <approvalAndOr>false</approvalAndOr>
                                            <approved>true</approved>
                                            <colleagueId>` + userfluig + `</colleagueId>
                                            <companyId>` + company + `</companyId>
                                            <crc>0</crc>
                                            <createDate>`+ datas +`</createDate>
                                            <createDateInMilliseconds>1560222000000</createDateInMilliseconds>
                                            <datasetName/>
                                            <deleted>false</deleted>
                                            <documentDescription>`+ nameFolder +`</documentDescription>
                                            <documentId>`+docId+`</documentId>
                                            <documentType>1</documentType>
                                            <documentTypeId/>
                                            <downloadEnabled>true</downloadEnabled>
                                            <draft>false</draft>
                                            <expirationDate>`+ datas +`</expirationDate>
                                            <expires>false</expires>
                                            <forAproval>false</forAproval>
                                            <iconId>0</iconId>
                                            <imutable>false</imutable>
                                            <indexed>true</indexed>
                                            <inheritSecurity>false</inheritSecurity>
                                            <internalVisualizer>false</internalVisualizer>
                                            <isEncrypted>false</isEncrypted>
                                            <keyWord/>
                                            <languageId>pt_BR</languageId>
                                            <lastModifiedDate>2019-06-11T00:00:00-03:00</lastModifiedDate>
                                            <metaListId>0</metaListId>
                                            <metaListRecordId>0</metaListRecordId>
                                            <onCheckout>false</onCheckout>
                                            <parentDocumentId>`+MakeItEasy.ged+`</parentDocumentId>
                                            <pdfRenderEngine/>
                                            <permissionType>0</permissionType>
                                            <phisicalFile/>
                                            <phisicalFileSize>0.0</phisicalFileSize>
                                            <privateDocument>false</privateDocument>
                                            <protectedCopy>false</protectedCopy>
                                            <publisherId>`+userfluig+`</publisherId>
                                            <restrictionType>0</restrictionType>
                                            <rowId>0</rowId>
                                            <securityLevel>0</securityLevel>
                                            <siteCode>Fluig</siteCode>
                                            <topicId>1</topicId>
                                            <translated>false</translated>
                                            <UUID>6B79A7DC-1811-45B0-94B2-CE894F4065BC</UUID>
                                            <updateIsoProperties>false</updateIsoProperties>
                                            <userNotify>false</userNotify>
                                            <validationStartDate>`+ datas +`</validationStartDate>
                                            <version>1000</version>
                                            <versionDescription/>
                                            <volumeId>Default</volumeId>
                                        </item>
                                    </Document>                               
                                    <security>
                                        `
                                            +OBJtoXML(listadeusuarios)+
                                        `
                                    </security>
                                    <Approvers>
                                    </Approvers>
                                </ws:updateFolder>
                            </soapenv:Body>
                        </soapenv:Envelope>`;
 


        WCMAPI.Create({
            url: WCMAPI.serverURL + '/webdesk/ECMFolderService?wsdl',
            contentType: 'application/json',
            dataType: 'application/json',
            async: true,
            headers: {
                'Content-Type': 'text/xml'
            },
            data: services,
            error: function(error) {
                
            },
            success: function(data) {
                
            }
        });
    };