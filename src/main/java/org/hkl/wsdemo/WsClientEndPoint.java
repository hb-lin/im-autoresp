package org.hkl.wsdemo;

import javax.websocket.*;
import java.io.IOException;

/**
 * @description 描述
 * @author: linhb
 * @date: 2020/11/16
 */
@ClientEndpoint
public class WsClientEndPoint {
    @OnOpen
    public void onOpen(Session session) {
        System.out.println("Connected to endpoint: " + session.getBasicRemote());
        try {
            MyClient.session=session;
            System.out.println(MyClient.session);
            String name = "Duke";
            System.out.println("Sending message to endpoint: " + name);
            session.getBasicRemote().sendText(name);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @OnMessage
    public void processMessage(String message) {
        System.out.println("Received message in client: " + message);
    }

    @OnError
    public void processError(Throwable t) {
        t.printStackTrace();
    }
}
