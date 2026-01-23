import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

/**
 * WebSocket Gateway
 * - Persistent, bidirectional connection
 * - Used for real-time chat & notifications
 */
@WebSocketGateway({
  namespace: '/chat',
  cors: true,
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  // Called when a client connects
  handleConnection(client: Socket) {
    console.log(`🔌 Client connected: ${client.id}`);
  }

  // Called when a client disconnects
  handleDisconnect(client: Socket) {
    console.log(`❌ Client disconnected: ${client.id}`);
  }

  /**
   * Client joins a chat room
   * Event: joinRoom
   */
  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(room);
    client.emit('message', {
      system: true,
      text: `Joined room: ${room}`,
    });
  }

  /**
   * Client sends a chat message
   * Event: sendMessage
   */
  @SubscribeMessage('sendMessage')
  handleMessage(
    @MessageBody() payload: { room: string; user: string; message: string },
  ) {
    // Broadcast to everyone in the room
    this.server.to(payload.room).emit('message', payload);
  }
}

// heart of real-time chat

// Accepts WebSocket connections

// Handles join room

// Handles sending messages

// Broadcasts messages