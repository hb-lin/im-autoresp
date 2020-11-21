package org.hkl.wsdemo;

import javax.websocket.ContainerProvider;
import javax.websocket.Session;
import javax.websocket.WebSocketContainer;
import java.net.URI;

/**
 * @description 描述
 * @author: linhb
 * @date: 2020/11/16
 */
public class MyClient {

    static Session session;
    public static void main(String[] args) {
        try {
            WebSocketContainer container = ContainerProvider.getWebSocketContainer();
            String uri = "ws://localhost:8080/ws/websocket";

//            String uri = "wss://wpush.meituan.com/websocket/718_WMOPEN/wo718wIRNwgDeitxrKNHC50El6SxGNGXwDsuIiGu_PuYcPfc";
            System.out.println("Connecting to " + uri);
            container.connectToServer(WsClientEndPoint.class, URI.create(uri));
            session.getBasicRemote().sendText("hello world");
            java.io.BufferedReader r=new  java.io.BufferedReader(new java.io.InputStreamReader( System.in));
            while(true){
                String line=r.readLine();
                if(line.equals("quit")) break;
                session.getBasicRemote().sendText(line);
            }

        } catch ( Exception ex) {
            ex.printStackTrace();
        }
    }
}