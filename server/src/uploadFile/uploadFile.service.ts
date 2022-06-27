import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { Upload, UploadDocument } from './uploadFile.schema'
//import { ParamsPostInput } from './inputs/params-post.input'
import { TokenService } from '../token/token.service'
//import { LikeInput } from '../likes/inputs/create-like.input'

@Injectable()
export class UploadService {
  private tokenService: TokenService
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Upload.name)
    private uploadModel: Model<UploadDocument>
  ) { }

  async file(fileID: string): Promise<Upload> {
    return this.uploadModel.findById(fileID).populate('author').exec()
  }
}